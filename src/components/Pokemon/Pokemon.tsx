import React from 'react'

type Props = {
  url: string;
};

const Pokemon: React.FC<Props> = ({url}) => {
  return (
    <div>{url}</div>
  )
}

export default Pokemon