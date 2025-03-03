import React, { useState } from 'react';
import BasicModal from '@components/BasicModal/BasicModal';
import DisplayItems from '@components/DisplayItems/DisplayItems';
import CreateItem from '@components/CreateItem/CreateItem';

interface ItemsModalProps {
  handleClose: () => void,
  modalOpen: boolean,
  modalItems: any[],
  currentDayCode: string
}

const ItemsModal: React.FC<ItemsModalProps> = ({handleClose, modalOpen, modalItems, currentDayCode}) => {


  return (
    <BasicModal open={modalOpen} handleClose={handleClose} title="Items">
      <DisplayItems items={modalItems} />
      <CreateItem closeSomething={handleClose} initialStartDate={currentDayCode} initialEndDate={currentDayCode} />
    </BasicModal>
  );
};

export default ItemsModal;
