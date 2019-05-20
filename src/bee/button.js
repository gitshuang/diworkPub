import 'bee-button/build/Button.css';
import { getContext } from '..utils'

if (window.location.origin.indexOf("u8c") > -1) {
    require("./button_u8c.css");
} else {
    require("./button.css");
}
export * from 'bee-button';
export { default } from 'bee-button';