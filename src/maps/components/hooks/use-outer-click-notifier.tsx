import React from 'react';
import _get from 'lodash/get';

// export const useOuterClickNotifier = (
//   onOuterClick: (event: any) => void,
//   innerRef: React.RefObject<HTMLDivElement>
// ) => {
//   React.useEffect(() => {
//     // only add listener, if the element exists
//     if (innerRef.current) {
//       document.addEventListener('click', handleClick);
//     }

//     // unmount previous first in case inputs have changed
//     return () => document.removeEventListener('click', handleClick);

//     function handleClick(e: any) {
//       debugger;
//       innerRef.current && innerRef.current !== e.target && onOuterClick(e);
//     }
//   }, [onOuterClick, innerRef]); // invoke again, if inputs have changed
// };

export const useOnOutsideClick = (handleOutsideClick: () => void) => {
  const innerBorderRef = React.useRef();

  const onClick = (event: any) => {
    const realRef = _get(innerBorderRef, 'current._containerRef.current', null);
    if (!(innerBorderRef.current && realRef === event.target)) {
      handleOutsideClick();
    }
  };

  useMountEffect(() => {
    document.addEventListener('click', onClick, true);
    return () => {
      document.removeEventListener('click', onClick, true);
    };
  });

  return { innerBorderRef };
};

const useMountEffect = (fun: () => void) => React.useEffect(fun, []);
