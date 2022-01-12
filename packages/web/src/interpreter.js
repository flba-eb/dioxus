"use strict";
var exports = {};
exports.__esModule = true;
exports.Interpreter = void 0;
function serialize_event(event) {
  var _a, _b;
  switch (event.type) {
    case "copy":
    case "cut":
    case "past":
      return {};
    case "compositionend":
    case "compositionstart":
    case "compositionupdate":
      var data = event.data;
      return {
        data: data,
      };
    case "keydown":
    case "keypress":
    case "keyup":
      var _c = event,
        charCode = _c.charCode,
        key = _c.key,
        altKey = _c.altKey,
        ctrlKey = _c.ctrlKey,
        metaKey = _c.metaKey,
        keyCode = _c.keyCode,
        shiftKey = _c.shiftKey,
        location_1 = _c.location,
        repeat = _c.repeat,
        which = _c.which;
      return {
        char_code: charCode,
        key: key,
        alt_key: altKey,
        ctrl_key: ctrlKey,
        meta_key: metaKey,
        key_code: keyCode,
        shift_key: shiftKey,
        location: location_1,
        repeat: repeat,
        which: which,
        locale: "locale",
      };
    case "focus":
    case "blur":
      return {};
    case "change":
      var target = event.target;
      var value = void 0;
      if (target.type === "checkbox" || target.type === "radio") {
        value = target.checked ? "true" : "false";
      } else {
        value =
          (_a = target.value) !== null && _a !== void 0
            ? _a
            : target.textContent;
      }
      return {
        value: value,
      };
    case "input":
    case "invalid":
    case "reset":
    case "submit": {
      var target_1 = event.target;
      var value_1 =
        (_b = target_1.value) !== null && _b !== void 0
          ? _b
          : target_1.textContent;
      if (target_1.type == "checkbox") {
        value_1 = target_1.checked ? "true" : "false";
      }
      return {
        value: value_1,
      };
    }
    case "click":
    case "contextmenu":
    case "doubleclick":
    case "drag":
    case "dragend":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "dragstart":
    case "drop":
    case "mousedown":
    case "mouseenter":
    case "mouseleave":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "mouseup": {
      var _d = event,
        altKey_1 = _d.altKey,
        button = _d.button,
        buttons = _d.buttons,
        clientX = _d.clientX,
        clientY = _d.clientY,
        ctrlKey_1 = _d.ctrlKey,
        metaKey_1 = _d.metaKey,
        pageX = _d.pageX,
        pageY = _d.pageY,
        screenX_1 = _d.screenX,
        screenY_1 = _d.screenY,
        shiftKey_1 = _d.shiftKey;
      return {
        alt_key: altKey_1,
        button: button,
        buttons: buttons,
        client_x: clientX,
        client_y: clientY,
        ctrl_key: ctrlKey_1,
        meta_key: metaKey_1,
        page_x: pageX,
        page_y: pageY,
        screen_x: screenX_1,
        screen_y: screenY_1,
        shift_key: shiftKey_1,
      };
    }
    case "pointerdown":
    case "pointermove":
    case "pointerup":
    case "pointercancel":
    case "gotpointercapture":
    case "lostpointercapture":
    case "pointerenter":
    case "pointerleave":
    case "pointerover":
    case "pointerout": {
      var _e = event,
        altKey_2 = _e.altKey,
        button = _e.button,
        buttons = _e.buttons,
        clientX = _e.clientX,
        clientY = _e.clientY,
        ctrlKey_2 = _e.ctrlKey,
        metaKey_2 = _e.metaKey,
        pageX = _e.pageX,
        pageY = _e.pageY,
        screenX_2 = _e.screenX,
        screenY_2 = _e.screenY,
        shiftKey_2 = _e.shiftKey,
        pointerId = _e.pointerId,
        width = _e.width,
        height = _e.height,
        pressure = _e.pressure,
        tangentialPressure = _e.tangentialPressure,
        tiltX = _e.tiltX,
        tiltY = _e.tiltY,
        twist = _e.twist,
        pointerType = _e.pointerType,
        isPrimary = _e.isPrimary;
      return {
        alt_key: altKey_2,
        button: button,
        buttons: buttons,
        client_x: clientX,
        client_y: clientY,
        ctrl_key: ctrlKey_2,
        meta_key: metaKey_2,
        page_x: pageX,
        page_y: pageY,
        screen_x: screenX_2,
        screen_y: screenY_2,
        shift_key: shiftKey_2,
        pointer_id: pointerId,
        width: width,
        height: height,
        pressure: pressure,
        tangential_pressure: tangentialPressure,
        tilt_x: tiltX,
        tilt_y: tiltY,
        twist: twist,
        pointer_type: pointerType,
        is_primary: isPrimary,
      };
    }
    case "select":
      return {};
    case "touchcancel":
    case "touchend":
    case "touchmove":
    case "touchstart": {
      var _f = event,
        altKey_3 = _f.altKey,
        ctrlKey_3 = _f.ctrlKey,
        metaKey_3 = _f.metaKey,
        shiftKey_3 = _f.shiftKey;
      return {
        // changed_touches: event.changedTouches,
        // target_touches: event.targetTouches,
        // touches: event.touches,
        alt_key: altKey_3,
        ctrl_key: ctrlKey_3,
        meta_key: metaKey_3,
        shift_key: shiftKey_3,
      };
    }
    case "scroll":
      return {};
    case "wheel": {
      var _g = event,
        deltaX = _g.deltaX,
        deltaY = _g.deltaY,
        deltaZ = _g.deltaZ,
        deltaMode = _g.deltaMode;
      return {
        delta_x: deltaX,
        delta_y: deltaY,
        delta_z: deltaZ,
        delta_mode: deltaMode,
      };
    }
    case "animationstart":
    case "animationend":
    case "animationiteration": {
      var _h = event,
        animationName = _h.animationName,
        elapsedTime = _h.elapsedTime,
        pseudoElement = _h.pseudoElement;
      return {
        animation_name: animationName,
        elapsed_time: elapsedTime,
        pseudo_element: pseudoElement,
      };
    }
    case "transitionend": {
      var _j = event,
        propertyName = _j.propertyName,
        elapsedTime = _j.elapsedTime,
        pseudoElement = _j.pseudoElement;
      return {
        property_name: propertyName,
        elapsed_time: elapsedTime,
        pseudo_element: pseudoElement,
      };
    }
    case "abort":
    case "canplay":
    case "canplaythrough":
    case "durationchange":
    case "emptied":
    case "encrypted":
    case "ended":
    case "error":
    case "loadeddata":
    case "loadedmetadata":
    case "loadstart":
    case "pause":
    case "play":
    case "playing":
    case "progress":
    case "ratechange":
    case "seeked":
    case "seeking":
    case "stalled":
    case "suspend":
    case "timeupdate":
    case "volumechange":
    case "waiting":
      return {};
    case "toggle":
      return {};
    default:
      return {};
  }
}
var bool_attrs = {
  allowfullscreen: true,
  allowpaymentrequest: true,
  async: true,
  autofocus: true,
  autoplay: true,
  checked: true,
  controls: true,
  default: true,
  defer: true,
  disabled: true,
  formnovalidate: true,
  hidden: true,
  ismap: true,
  itemscope: true,
  loop: true,
  multiple: true,
  muted: true,
  nomodule: true,
  novalidate: true,
  open: true,
  playsinline: true,
  readonly: true,
  required: true,
  reversed: true,
  selected: true,
  truespeed: true,
};
export var Interpreter = /** @class */ (function () {
  function Interpreter(root) {
    this.root = root;
    this.stack = [root];
    this.listeners = {};
    this.lastNodeWasText = false;
    this.nodes = [root];
  }
  Interpreter.prototype.top = function () {
    return this.stack[this.stack.length - 1];
  };
  Interpreter.prototype.pop = function () {
    return this.stack.pop();
  };
  Interpreter.prototype.PushRoot = function (root) {
    var node = this.nodes[root];
    this.stack.push(node);
  };
  Interpreter.prototype.AppendChildren = function (many) {
    var root = this.stack[this.stack.length - (1 + many)];
    var to_add = this.stack.splice(this.stack.length - many);
    for (var i = 0; i < many; i++) {
      root.appendChild(to_add[i]);
    }
  };
  Interpreter.prototype.ReplaceWith = function (root_id, m) {
    var root = this.nodes[root_id];
    var els = this.stack.splice(this.stack.length - m);
    root.replaceWith.apply(root, els);
  };
  Interpreter.prototype.InsertAfter = function (root, n) {
    var old = this.nodes[root];
    var new_nodes = this.stack.splice(this.stack.length - n);
    old.after.apply(old, new_nodes);
  };
  Interpreter.prototype.InsertBefore = function (root, n) {
    var old = this.nodes[root];
    var new_nodes = this.stack.splice(this.stack.length - n);
    old.before.apply(old, new_nodes);
  };
  Interpreter.prototype.Remove = function (root) {
    var node = this.nodes[root];
    if (node !== undefined) {
      node.remove();
    }
  };
  Interpreter.prototype.CreateTextNode = function (text, root) {
    // todo: make it so the types are okay
    var node = document.createTextNode(text);
    this.nodes[root] = node;
    this.stack.push(node);
  };
  Interpreter.prototype.CreateElement = function (tag, root) {
    var el = document.createElement(tag);
    el.setAttribute("dioxus-id", "".concat(root));
    this.nodes[root] = el;
    this.stack.push(el);
  };
  Interpreter.prototype.CreateElementNs = function (tag, root, ns) {
    var el = document.createElementNS(ns, tag);
    this.stack.push(el);
    this.nodes[root] = el;
  };
  Interpreter.prototype.CreatePlaceholder = function (root) {
    var el = document.createElement("pre");
    el.hidden = true;
    this.stack.push(el);
    this.nodes[root] = el;
  };
  Interpreter.prototype.NewEventListener = function (event_name, scope, root) {
    console.log("new event listener", event_name, root, scope);
    var element = this.nodes[root];
    element.setAttribute(
      "dioxus-event-".concat(event_name),
      "".concat(scope, ".").concat(root)
    );
    // if (!this.listeners[event_name]) {
    //   this.listeners[event_name] = handler;
    //   this.root.addEventListener(event_name, handler);
    // }
  };
  Interpreter.prototype.RemoveEventListener = function (
    root,
    event_name,
    scope
  ) {
    //
  };
  Interpreter.prototype.SetText = function (root, text) {
    this.nodes[root].textContent = text;
  };
  Interpreter.prototype.SetAttribute = function (root, field, value, ns) {
    var name = field;
    var node = this.nodes[root];
    if (ns == "style") {
      // @ts-ignore
      node.style[name] = value;
    } else if (ns != null || ns != undefined) {
      node.setAttributeNS(ns, name, value);
    } else {
      switch (name) {
        case "value":
          if (value != node.value) {
            node.value = value;
          }
          break;
        case "checked":
          node.checked = value === "true";
          break;
        case "selected":
          node.selected = value === "true";
          break;
        case "dangerous_inner_html":
          node.innerHTML = value;
          break;
        default:
          // https://github.com/facebook/react/blob/8b88ac2592c5f555f315f9440cbb665dd1e7457a/packages/react-dom/src/shared/DOMProperty.js#L352-L364
          if (value == "false" && bool_attrs.hasOwnProperty(name)) {
            node.removeAttribute(name);
          } else {
            node.setAttribute(name, value);
          }
      }
    }
  };
  Interpreter.prototype.RemoveAttribute = function (root, name) {
    var node = this.nodes[root];
    node.removeAttribute(name);
    if (name === "value") {
      node.value = "";
    }
    if (name === "checked") {
      node.checked = false;
    }
    if (name === "selected") {
      node.selected = false;
    }
  };
  Interpreter.prototype.handleEdits = function (edits) {
    console.log("handling edits ", edits);
    this.stack.push(this.root);
    for (var _i = 0, edits_1 = edits; _i < edits_1.length; _i++) {
      var edit = edits_1[_i];
      this.handleEdit(edit);
    }
  };
  Interpreter.prototype.handleEdit = function (edit) {
    switch (edit.type) {
      case "PushRoot":
        this.PushRoot(edit.root);
        break;
      case "AppendChildren":
        this.AppendChildren(edit.many);
        break;
      case "ReplaceWith":
        this.ReplaceWith(edit.root, edit.m);
        break;
      case "InsertAfter":
        this.InsertAfter(edit.root, edit.n);
        break;
      case "InsertBefore":
        this.InsertBefore(edit.root, edit.n);
        break;
      case "Remove":
        this.Remove(edit.root);
        break;
      case "CreateTextNode":
        this.CreateTextNode(edit.text, edit.root);
        break;
      case "CreateElement":
        this.CreateElement(edit.tag, edit.root);
        break;
      case "CreateElementNs":
        this.CreateElementNs(edit.tag, edit.root, edit.ns);
        break;
      case "CreatePlaceholder":
        this.CreatePlaceholder(edit.root);
        break;
      case "RemoveEventListener":
        this.RemoveEventListener(edit.root, edit.event_name, edit.scope);
        break;
      case "NewEventListener":
        // todo: only on desktop should we make our own handler
        var handler = function (event) {
          var target = event.target;
          console.log("event", event);
          if (target != null) {
            var real_id = target.getAttribute("dioxus-id");
            var should_prevent_default = target.getAttribute(
              "dioxus-prevent-default"
            );
            var contents = serialize_event(event);
            if (should_prevent_default === "on".concat(event.type)) {
              event.preventDefault();
            }
            if (real_id == null) {
              return;
            }
            window.rpc.call("user_event", {
              event: edit.event_name,
              mounted_dom_id: parseInt(real_id),
              contents: contents,
            });
          }
        };
        this.NewEventListener(edit.event_name, edit.scope, edit.root);
        // this.NewEventListener(edit, handler);
        break;
      case "SetText":
        this.SetText(edit.root, edit.text);
        break;
      case "SetAttribute":
        this.SetAttribute(edit.root, edit.field, edit.value, edit.ns);
        break;
      case "RemoveAttribute":
        this.RemoveAttribute(edit.root, edit.name);
        break;
    }
  };
  return Interpreter;
})();
exports.Interpreter = Interpreter;
function main() {
  var root = window.document.getElementById("main");
  if (root != null) {
    window.interpreter = new Interpreter(root);
    window.rpc.call("initialize");
  }
}
