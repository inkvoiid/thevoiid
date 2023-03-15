import React, { useMemo } from "react";
import View360, { EquirectProjection } from "@egjs/react-view360";
import "@egjs/react-view360/css/view360.min.css";

const pano = ({src}) => {
  const projection = useMemo(() => new EquirectProjection({
    src
  }), [src]);

  return <View360 className="is-16by9" projection={projection} />
}

export default pano;