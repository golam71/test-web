import Dismiss from "solid-dismiss";
import { createSignal } from "solid-js";

export const Modal = () => {
  const [open, setOpen] = createSignal(false);
  let btnEl;
  let btnSaveEl;

  // const onClickClose = () => {
  //   setOpen(false);
  // };

  const onClickOverlay = (e) => {
    if (e.target !== e.currentTarget) return;
    setOpen(false);
  };

  return (
    <div>
      <button
        type="submit"
        class="w-52 rounded-md border border-transparent px-5 py-3 bg-aquamarine text-base font-bold text-black shadow hover:bg-aquamarine-300 focus:outline-none focus:ring-2 focus:ring-aquamarine-900 focus:ring-offset-2 sm:px-6"
        ref={btnEl}
      >
        Watch Trailer
      </button>

      <Dismiss
        menuButton={btnEl}
        open={open}
        setOpen={setOpen}
        modal
        removeScrollbar={false}
        focusElementOnOpen="menuPopup"
      >
        <div
          class="modal-container fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-blend-normal bg-black backdrop-blur-3xl bg-gray-500/30"
          onClick={onClickOverlay}
          role="presentation"
        >
          <div
            class="relative w-auto  bg-gray-500/30  items-end flex flex-col "
            role="dialog"
            aria-modal="true"
            tabindex="-1"
            ref={btnSaveEl}
          >
            <iframe
              src="https://www.youtube-nocookie.com/embed/RpmqwNaGMyM?vq=hd1080&modestbranding=1"
              width="800"
              height="450"
              title="A YouTube video"
              frameborder="0"
              allowfullscreen
            />
          </div>
        </div>
      </Dismiss>
    </div>
  );
};
