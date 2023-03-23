import { FaArrowLeft } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { GoBack } from 'components';

export function BackLink({to, children}) {
    return (
        <GoBack to={to}>
            <FaArrowLeft />
            {children}
        </GoBack>
    );
};

BackLink.propTypes = {
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    children: PropTypes.string.isRequired,
};