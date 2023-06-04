import AppError from "../errors/appError";

const dataIsEmpty = async (data: any) => {
  const isEmpty = Object.keys(data).length <= 0;

  if (isEmpty) {
    throw new AppError("your request body is empty.", 400);
  }
};

export default dataIsEmpty;
