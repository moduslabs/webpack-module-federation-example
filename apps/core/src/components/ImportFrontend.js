import * as React from "react";

function loadComponent(scope, module) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__("default");

    const container = window[scope]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
}

const useDynamicFeature = ({ src }) => {
  const [ready, setReady] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (!src) {
      return;
    }

    const element = document.createElement("script");

    element.src = src;
    element.type = "text/javascript";
    element.async = true;

    setReady(false);
    setFailed(false);

    element.onload = () => {
      console.log(`Micro Frontend Imported: ${src}`);
      setReady(true);
    };

    element.onerror = () => {
      console.error(`Micro Frontend Loading Error: ${src}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      console.log(`Micro Frontend Removed: ${src}`);
      document.head.removeChild(element);
    };
  }, [src]);

  return {
    ready,
    failed,
  };
};

function ImportFrontend({ src, lib, mod, ...rest }) {
  const { ready, failed } = useDynamicFeature({ src });

  if (!ready) {
    return <h2>Loading dynamic script: {src}</h2>;
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {src}</h2>;
  }

  const Component = React.lazy(loadComponent(lib, mod));

  return (
    <React.Suspense fallback="Loading System">
      <Component {...rest} />
    </React.Suspense>
  );
}

export default ImportFrontend;
