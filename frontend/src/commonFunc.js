import { Modal } from 'antd';

const showAlertByType = (type, option) => {
  switch (type) {
    case "error":
      return Modal.error(option);
    case "warning":
      return Modal.warning(option);
    case "success":
      return Modal.success(option);
    case "info":
      return Modal.info(option);
    default:
      return Modal.info(option);
  }
}

export {
  showAlertByType
}