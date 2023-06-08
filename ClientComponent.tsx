import React, { useEffect, useState } from "react";

interface ClientComponentProps {
  children: any;
}

const ClientComponent: React.FC<ClientComponentProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient ? children : null;
};

export default ClientComponent;
