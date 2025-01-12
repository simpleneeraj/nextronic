import UIView from '@/ui-kit/UIView';
import MiniCircles from './mini-circles';
import DetailedCircles from './detailed-circles';

export default function Component() {
  return (
    <UIView className="flex flex-col gap-5 p-5 overflow-auto h-screen">
      <DetailedCircles />
      <MiniCircles />
    </UIView>
  );
}
