import { ReactNode } from 'react';
import { LazyMotion } from 'framer-motion';

// ----------------------------------------------------------------------

// eslint-disable-next-line import/extensions
const loadFeatures = () => import('./features.js').then((res) => res.default);

type Props = {
  children: ReactNode;
};

export default function MotionLazyContainer({ children }: Props) {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
}
