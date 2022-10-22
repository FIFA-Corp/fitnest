import { Player, Controls } from "@lottiefiles/react-lottie-player";
import loadingLottie from "./../../src/component/ui/images/loading-animation-blue.json";

export const LoadingUi = () => {
  return (
    <>
      <Player
        autoplay
        loop
        src={loadingLottie}
        style={{ height: "300px", width: "300px" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </>
  );
};
