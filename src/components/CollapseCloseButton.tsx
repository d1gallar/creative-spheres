import { Cross1Icon } from '@radix-ui/react-icons'
import React from 'react';
import { useCollapse } from '@/hooks/useCollapse';

export default function CollapseCloseButton() {
  const {closeCollapse} = useCollapse();
  return (
    <button
      id="collapseCloseButton"
      aria-label="Collapse Close Button"
      className="absolute top-4 right-4 md:hidden block hover:scale-105 p-2 w-fit h-fit"
      onClick={closeCollapse}
    >
      <Cross1Icon className="text-white w-6 h-6"/>
    </button>
  )
}
