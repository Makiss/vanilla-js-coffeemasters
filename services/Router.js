const Router = {
  init() {
    document.querySelectorAll("a.navlink").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        this.go(e.target.getAttribute("href"));
      });
    });

    window.addEventListener("popstate", (e) => {
      this.go(e.state.route, false);
    });

    this.go(location.pathname);
  },
  go(route, addToHistory = true) {
    let pageElement = null;
    const mainElement = document.querySelector("main");

    if (addToHistory) {
      history.pushState(
        {
          route,
        },
        null,
        route
      );
    }

    switch (route) {
      case "/":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Menu";
        break;
      case "/order":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Your Order";
        break;
      default:
        if (route.startsWith("/product-")) {
          pageElement = document.createElement("h1");
          pageElement.textContent = "Details";
          const paramId = route.substring(route.lastIndexOf("-") + 1);
          pageElement.dataset.id = paramId;
        }
    }

    if (pageElement) {
      mainElement.innerHTML = "";
      mainElement.appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
