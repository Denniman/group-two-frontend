import PropTypes from "prop-types";
import { Card as CardComponet } from "flowbite-react";

export const Card = ({ heading, subHeading, children }) => {
  return (
    <CardComponet>
      <h5 className="text-[13px] font-bold tracking-tight text-gray-900 dark:text-white">
        {heading}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 ">{subHeading}</p>
      {children}
    </CardComponet>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};
