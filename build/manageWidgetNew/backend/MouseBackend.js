'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MutationObserver = require('mutation-observer');
function getEventClientOffset(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}

var ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
  var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;

  if (!el) {
    return null;
  }

  var _el$getBoundingClient = el.getBoundingClientRect(),
      top = _el$getBoundingClient.top,
      left = _el$getBoundingClient.left;

  return { x: left, y: top };
}

var MouseBackend = function () {
  function MouseBackend(manager) {
    _classCallCheck(this, MouseBackend);

    this.actions = manager.getActions();
    this.monitor = manager.getMonitor();
    this.registry = manager.getRegistry();

    this.sourceNodes = {};
    this.sourceNodesOptions = {};
    this.sourcePreviewNodes = {};
    this.sourcePreviewNodesOptions = {};
    this.targetNodes = {};
    this.targetNodeOptions = {};
    this.mouseClientOffset = {};
    this.moveStartSourceIds = [];

    this.getSourceClientOffset = this.getSourceClientOffset.bind(this);

    this.handleWindowMoveStart = this.handleWindowMoveStart.bind(this);
    this.handleWindowMoveStartCapture = this.handleWindowMoveStartCapture.bind(this);
    this.handleWindowMove = this.handleWindowMove.bind(this);
    this.handleWindowMoveCapture = this.handleWindowMoveCapture.bind(this);
    this.handleWindowMoveEndCapture = this.handleWindowMoveEndCapture.bind(this);
  }

  MouseBackend.prototype.setup = function setup() {
    if (typeof window === 'undefined') {
      return;
    }

    if (this.constructor.isSetUp) {
      throw new Error('Cannot have two DnD Mouse backend at the same time');
    }

    this.constructor.isSetUp = true;
    window.addEventListener('mousedown', this.handleWindowMoveStart);
    window.addEventListener('mousedown', this.handleWindowMoveStartCapture, true);
    window.addEventListener('mousemove', this.handleWindowMove);
    window.addEventListener('mousemove', this.handleWindowMoveCapture, true);
    window.addEventListener('mouseup', this.handleWindowMoveEndCapture, true);
  };

  MouseBackend.prototype.getSourceClientOffset = function getSourceClientOffset(sourceId) {
    return getNodeClientOffset(this.sourceNodes[sourceId]);
  };

  MouseBackend.prototype.teardown = function teardown() {
    if (typeof window === 'undefined') {
      return;
    }

    this.constructor.isSetUp = false;

    this.mouseClientOffset = {};
    window.removeEventListener('mousedown', this.handleWindowMoveStart);
    window.removeEventListener('mousedown', this.handleWindowMoveStartCapture, true);
    window.removeEventListener('mousemove', this.handleWindowMove);
    window.removeEventListener('mousemove', this.handleWindowMoveCapture, true);
    window.removeEventListener('mouseup', this.handleWindowMoveEndCapture, true);
  };

  MouseBackend.prototype.connectDragSource = function connectDragSource(sourceId, node) {
    var _this = this;

    this.sourceNodes[sourceId] = node;

    var handleMoveStart = this.handleMoveStart.bind(this, sourceId);
    node.addEventListener('mousedown', handleMoveStart);

    return function () {
      delete _this.sourceNodes[sourceId];
      node.removeEventListener('mousedown', handleMoveStart);
    };
  };

  MouseBackend.prototype.connectDragPreview = function connectDragPreview(sourceId, node, options) {
    var _this2 = this;

    this.sourcePreviewNodesOptions[sourceId] = options;
    this.sourcePreviewNodes[sourceId] = node;

    return function () {
      delete _this2.sourcePreviewNodes[sourceId];
      delete _this2.sourcePreviewNodesOptions[sourceId];
    };
  };

  MouseBackend.prototype.connectDropTarget = function connectDropTarget(targetId, node) {
    var _this3 = this;

    // this.targetNodes[targetId] = node
    var handleMove = this.handleMove.bind(this, targetId, node);
    node.addEventListener('mousemove', handleMove);
    return function () {
      delete _this3.targetNodes[targetId];
      node.removeEventListener('mousemove', handleMove);
    };
  };

  MouseBackend.prototype.handleWindowMoveStartCapture = function handleWindowMoveStartCapture() {
    this.moveStartSourceIds = [];
  };

  MouseBackend.prototype.handleMoveStart = function handleMoveStart(sourceId) {
    this.moveStartSourceIds.unshift(sourceId);
  };

  MouseBackend.prototype.handleWindowMoveStart = function handleWindowMoveStart(e) {
    var clientOffset = getEventClientOffset(e);
    if (clientOffset) {
      this.mouseClientOffset = clientOffset;
    }
  };

  MouseBackend.prototype.handleWindowMoveCapture = function handleWindowMoveCapture(e) {
    this.targetNodesObj = {};
    this.targetNodes = [];
    // this.moveStartSourceIds = [];
  };

  MouseBackend.prototype.handleMove = function handleMove(targetId, node) {
    this.targetNodesObj[targetId] = node;
    this.targetNodes.unshift(targetId);
    // this.targetNodes.unshift(targetId)
  };

  MouseBackend.prototype.handleWindowMove = function handleWindowMove(e) {
    var moveStartSourceIds = this.moveStartSourceIds;

    var clientOffset = getEventClientOffset(e);
    if (!clientOffset) return;
    if (!this.monitor.isDragging() && this.mouseClientOffset.hasOwnProperty('x') && moveStartSourceIds && (this.mouseClientOffset.x !== clientOffset.x || this.mouseClientOffset.y !== clientOffset.y)) {
      this.moveStartSourceIds = null;
      this.actions.beginDrag(moveStartSourceIds, {
        clientOffset: this.mouseClientOffset,
        getSourceClientOffset: this.getSourceClientOffset,
        publishSource: false
      });
    }
    if (!this.monitor.isDragging()) {
      return;
    }

    var sourceNode = this.sourceNodes[this.monitor.getSourceId()];
    this.installSourceNodeRemovalObserver(sourceNode);
    this.actions.publishDragSource();

    e.preventDefault();
    var targetNodes = this.targetNodes,
        targetNodesObj = this.targetNodesObj;

    this.targetNodes = [];
    this.targetNodesObj = {};
    var matchingTargetIds = targetNodes.filter(function (targetId) {
      var boundingRect = targetNodesObj[targetId].getBoundingClientRect();
      return clientOffset.x >= boundingRect.left && clientOffset.x <= boundingRect.right && clientOffset.y >= boundingRect.top && clientOffset.y <= boundingRect.bottom;
    });
    this.actions.hover(matchingTargetIds, {
      clientOffset: clientOffset
    });
  };

  MouseBackend.prototype.handleWindowMoveEndCapture = function handleWindowMoveEndCapture(e) {
    if (!this.monitor.isDragging() || this.monitor.didDrop()) {
      this.moveStartSourceIds = null;
      return;
    }

    e.preventDefault();

    this.mouseClientOffset = {};

    this.uninstallSourceNodeRemovalObserver();
    this.actions.drop();
    this.actions.endDrag();
  };

  MouseBackend.prototype.installSourceNodeRemovalObserver = function installSourceNodeRemovalObserver(node) {
    var _this4 = this;

    this.uninstallSourceNodeRemovalObserver();

    this.draggedSourceNode = node;
    this.draggedSourceNodeRemovalObserver = new MutationObserver(function () {
      if (!node.parentElement) {
        _this4.resurrectSourceNode();
        _this4.uninstallSourceNodeRemovalObserver();
      }
    });

    if (!node || !node.parentElement) {
      return;
    }

    this.draggedSourceNodeRemovalObserver.observe(node.parentElement, { childList: true });
  };

  MouseBackend.prototype.resurrectSourceNode = function resurrectSourceNode() {
    this.draggedSourceNode.style.display = 'none';
    this.draggedSourceNode.removeAttribute('data-reactid');
    document.body.appendChild(this.draggedSourceNode);
  };

  MouseBackend.prototype.uninstallSourceNodeRemovalObserver = function uninstallSourceNodeRemovalObserver() {
    if (this.draggedSourceNodeRemovalObserver) {
      this.draggedSourceNodeRemovalObserver.disconnect();
    }

    this.draggedSourceNodeRemovalObserver = null;
    this.draggedSourceNode = null;
  };

  return MouseBackend;
}();

exports["default"] = MouseBackend;
module.exports = exports['default'];