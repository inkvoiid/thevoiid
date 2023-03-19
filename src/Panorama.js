import React, { useMemo } from "react";
import View360, { EquirectProjection } from "@egjs/react-view360";
import "@egjs/react-view360/css/view360.min.css";

const Pano = ({src}) => {
  const projection = useMemo(() => new EquirectProjection({
    src
  }), [src]);

  return <View360 className="is-16by9" fov={95} initialZoom={0} projection={projection} />
}

export default Pano;