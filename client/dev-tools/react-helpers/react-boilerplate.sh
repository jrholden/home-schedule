#!/bin/bash

# Function to create a component
create_component() {
  local name=$1
  local dir="src/components/$name"
  mkdir -p "$dir"
  cat <<EOL > "$dir/$name.tsx"
import React from 'react';

const $name: React.FC = () => {
  return (
    <div>
      <h1>$name Component</h1>
    </div>
  );
};

export default $name;
EOL

  cat <<EOL > "$dir/$name.test.tsx"
import React from 'react';
import { render } from '@testing-library/react';
import $name from './$name';

test('renders $name component', () => {
  render(<$name />);
});
EOL
cat <<EOL > "$dir/$name.module.css"
.$name {
  color: red;
}
EOL

  echo "Component $name created successfully."
}

# Function to create a service
create_service() {
  local name=$1
  local dir="src/services"
  mkdir -p "$dir"
  cat <<EOL > "$dir/$name.ts"
export const $name = () => {
  // Service logic here
};
EOL

  echo "Service $name created successfully."
}

# Function to create a hook
create_hook() {
  local name=$1
  local dir="src/hooks"
  mkdir -p "$dir"
  cat <<EOL > "$dir/use$name.ts"
import { useState, useEffect } from 'react';

const use$name = () => {
  const [state, setState] = useState<string>('');

  useEffect(() => {
    setState('Hello from use$name hook!');
  }, []);

  return state;
};

export default use$name;
EOL

  echo "Hook use$name created successfully."
}

# Main script logic
if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <type> <name>"
  echo "Types: component, service, hook"
  exit 1
fi

type=$1
name=$2

case $type in
  component)
    create_component "$name"
    ;;
  service)
    create_service "$name"
    ;;
  hook)
    create_hook "$name"
    ;;
  *)
    echo "Invalid type specified. Use 'component', 'service', or 'hook'."
    exit 1
    ;;
esac