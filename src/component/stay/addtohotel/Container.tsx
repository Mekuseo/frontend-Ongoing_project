import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => <div>{children}</div>;

export default Container;
