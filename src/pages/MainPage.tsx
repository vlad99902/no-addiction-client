import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';

import { Container } from '../components/Container';
import { InAddiction } from '../containers/InAddiction';

import { OutAddiction } from '../containers/OutAddiction';
import animateScrollTo from 'animated-scroll-to';
import { Button } from '../components/Button';

const MainPage: React.FC = () => {
  const inAddiction = useSelector(
    (state: RootState) => state.timers.inAddiction
  );

  {
    /*
  // const [pos, setPos] = useState(0);
  // const [scroll, setScroll] = useState(document.getElementById('scrolling'));

  // useEffect(() => {
  //   document.addEventListener('scroll', scrollHandler);
  //   return () => {
  //     document.removeEventListener('scroll', scrollHandler);
  //   };
  // }, []);

  // const scrollHandler = (e: any) => {
  //   setPos(
  //     (prev) =>
  //       (prev =
  //         e.target.documentElement.scrollHeight -
  //         (e.target.documentElement.scrollTop + window.innerHeight))
    // );
    // if (pos < window.innerHeight / 2) window.scrollTo(0, 0);
    // console.log('scrollHeight', e.target.documentElement.scrollHeight);
    // console.log('scrollTop', e.target.documentElement.scrollTop);
    // console.log('innerHeight', window.innerHeight);
  // };

  // useEffect(() => {
  //   console.log('window.innerHeight', window.innerHeight);
  // }, [pos]);

  // function scrollTo(element: any, to: any, duration: any) {
  //   if (duration <= 0) return;
  //   const difference = to - element?.scrollTop;
  //   const perTick = (difference / duration) * 10;

  //   setTimeout(function () {
  //     element.scrollTop = element?.scrollTop + perTick;
  //     if (element.scrollTop === to) return;
  //     scrollTo(element, to, duration - 10);
  //   }, 10);
	// }
	*/
  }

  return (
    <div
      id="scrolling"
      onScroll={() => {}}
      style={{ height: 'calc(100% - 100px)' }}
    >
      <a href="#records">qwe</a>
      <Container
        maxWidth="1600px"
        margin="0 auto"
        padding="100px 18px 0px"
        height="calc(100vh - 100px)"
      >
        {inAddiction ? <InAddiction /> : <OutAddiction />}
      </Container>
    </div>
  );
};

export default MainPage;
