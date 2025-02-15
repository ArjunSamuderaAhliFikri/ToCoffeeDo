import { useEffect, useState } from "react";
import { ShowSidebarContext } from "../../context/isShowSidebarContext";

type SidebarProps = {
  children: React.ReactNode;
};

const SidebarContextLayout = (props: SidebarProps): JSX.Element => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const calculateWidthViewPort = window.innerWidth;
  useEffect(() => {
    if (calculateWidthViewPort >= 1366) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, [calculateWidthViewPort]);
  return (
    <>
      <ShowSidebarContext.Provider value={{ isShow, setIsShow }}>
        {props.children}
      </ShowSidebarContext.Provider>
    </>
  );
};

export default SidebarContextLayout;
