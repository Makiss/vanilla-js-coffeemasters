const Store = {
  menu: null,
  cart: [],
};

const proxiedStore = new Proxy(Store, {
  set(target, propName, value) {
    target[propName] = value;

    if (propName == "menu") {
      window.dispatchEvent(new Event("appmenuchange"));
    }

    if (propName == "cart") {
      window.dispatchEvent(new Event("appcartchange"));
    }

    return true;
  },
});

export default proxiedStore;
