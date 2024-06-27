
import React, { useEffect } from 'react';

const Features = () => {
  useEffect(() => {
    window.location.href = '/features/index.html';
  }, []);

  return (
    <div>
      <p>Redirecting to features...</p>
    </div>
  );
};

export default Features;
