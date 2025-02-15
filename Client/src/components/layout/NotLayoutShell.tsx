import { useState } from "react";
import { NotLayoutContext } from "../../context/withOutLayoutContext";
type NLayoutProps = {
  children?: React.ReactNode;
  params?: string;
};

const NotLayoutShell = (props: NLayoutProps) => {
  const [notLayout, setNotLayout] = useState<boolean>(false);

  return (
    <>
      <NotLayoutContext.Provider value={{ notLayout, setNotLayout }}>
        {props.children}
      </NotLayoutContext.Provider>
    </>
  );
};

export default NotLayoutShell;
