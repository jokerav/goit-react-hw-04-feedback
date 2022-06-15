import React from 'react';
import PropTypes from 'prop-types';
function Section({ title, children }) {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

export default Section;
