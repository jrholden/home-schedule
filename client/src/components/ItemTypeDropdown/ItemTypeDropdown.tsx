import React from 'react';
import { ItemType } from '@shared/enums';

interface ItemTypeDropdownProps {
  value: ItemType;
  onChange: (value: ItemType) => void;
}

const ItemTypeDropdown: React.FC<ItemTypeDropdownProps> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="itemType">Item Type:</label>
      <select
        id="itemType"
        value={value}
        onChange={(e) => onChange(e.target.value as ItemType)}
        required
      >
        {Object.values(ItemType).map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ItemTypeDropdown;
