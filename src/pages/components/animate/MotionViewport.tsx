import { ReactNode } from 'react';
import { m, MotionProps } from 'framer-motion';
import { useMediaQuery } from 'hooks/useMediaQuery';

//
import { varContainer } from '.';

// ----------------------------------------------------------------------

type IProps = MotionProps;

interface Props extends IProps {
  children: ReactNode;
  disableAnimatedMobile?: boolean;
  className?: string;
}

export default function MotionViewport({
  children,
  disableAnimatedMobile = true,
  className,
  ...other
}: Props) {
  const isMobile = useMediaQuery('(max-width: 767px)');

  if (isMobile && disableAnimatedMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      initial="initial"
      whileInView="animate"
      className={className}
      viewport={{ once: true, amount: 0.3 }}
      variants={varContainer()}
      {...other}
    >
      {children}
    </m.div>
  );
}
