import { useContext, useEffect } from "react";
import "../../../styles/AppShell.css";
import Sidebar from "../sidebar";
import { NotLayoutContext } from "../../../context/withOutLayoutContext";

type AppShellProps = {
  children?: React.ReactNode;
};

const AppShell = (props: AppShellProps): JSX.Element => {
  const { children } = props;
  const { notLayout, setNotLayout } = useContext(NotLayoutContext);

  return (
    <>
      {notLayout ? (
        <>{children}</>
      ) : (
        <>
          <div className="container">
            <Sidebar />
            {children}
          </div>
        </>
      )}
    </>
  );
};

export default AppShell;
