// components/AnimationOnScroll.tsx
import { InView } from 'react-intersection-observer';
import React, { ReactNode } from 'react';

interface AnimationOnScrollProps {
 children: ReactNode;
 classNameInView: string;
 classNameNotInView: string;
 triggerThreshold: number|number[]
}

const AnimationOnScroll: React.FC<AnimationOnScrollProps> = ({ children, classNameInView, classNameNotInView, triggerThreshold }) => {
 return (
    <InView triggerOnce threshold={triggerThreshold}>
      {({ inView, ref }) => (
        <div ref={ref} className={inView ? classNameInView : classNameNotInView}>
          {children}
        </div>
      )}
    </InView>
 );
};

export default AnimationOnScroll;