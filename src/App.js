// https://github.com/donavon/hook-flow

import * as React from "react";

const Child = () => {
  console.log("%c    Child: render start", "color: MediumSpringGreen");

  const [count, setCount] = React.useState(() => {
    console.log("%c    Child: useState(() => 0)", "color: tomato");
    return 0;
  });

  React.useEffect(() => {
    console.log("%c    Child: useEffect(() => {})", "color: LightCoral");
    return () => {
      console.log(
        "%c    Child: useEffect(() => {}) cleanup 🧹",
        "color: LightCoral"
      );
    };
  });

  React.useEffect(() => {
    console.log(
      "%c    Child: useEffect(() => {}, [])",
      "color: MediumTurquoise"
    );
    return () => {
      console.log(
        "%c    Child: useEffect(() => {}, []) cleanup 🧹",
        "color: MediumTurquoise"
      );
    };
  }, []);

  React.useEffect(() => {
    console.log("%c    Child: useEffect(() => {}, [count])", "color: HotPink");
    return () => {
      console.log(
        "%c    Child: useEffect(() => {}, [count]) cleanup 🧹",
        "color: HotPink"
      );
    };
  }, [count]);

  const element = (
    <button
      className="text-gray-300 text-2xl flex h-full items-center m-auto"
      onClick={() => setCount((previousCount) => previousCount + 1)}
    >
      {count}
    </button>
  );

  console.log("%c    Child: render end", "color: MediumSpringGreen");

  return element;
};

const App = () => {
  console.log("%cApp: render start", "color: MediumSpringGreen");

  const [showChild, setShowChild] = React.useState(() => {
    console.log("%cApp: useState(() => false)", "color: tomato");
    return false;
  });

  React.useEffect(() => {
    console.log("%cApp: useEffect(() => {})", "color: LightCoral");
    return () => {
      console.log("%cApp: useEffect(() => {}) cleanup 🧹", "color: LightCoral");
    };
  });

  React.useEffect(() => {
    console.log("%cApp: useEffect(() => {}, [])", "color: MediumTurquoise");
    return () => {
      console.log(
        "%cApp: useEffect(() => {}, []) cleanup 🧹",
        "color: MediumTurquoise"
      );
    };
  }, []);

  React.useEffect(() => {
    console.log("%cApp: useEffect(() => {}, [showChild])", "color: HotPink");
    return () => {
      console.log(
        "%cApp: useEffect(() => {}, [showChild]) cleanup 🧹",
        "color: HotPink"
      );
    };
  }, [showChild]);

  const element = (
    <div className="h-screen grid">
      <div className="m-auto">
        <label className="text-5xl text-gray-300">
          <input
            className="w-9 h-9"
            type="checkbox"
            checked={showChild}
            onChange={(e) => setShowChild(e.target.checked)}
          />{" "}
          show child
        </label>
        <div className="w-20 h-20 rounded bg-gray-600 items-center m-auto mt-1">
          {showChild ? <Child /> : null}
        </div>
      </div>
    </div>
  );

  console.log("%cApp: render end", "color: MediumSpringGreen");

  return element;
};

export default App;
