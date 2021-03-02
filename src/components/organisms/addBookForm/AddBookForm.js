import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import {
  InputWrapper,
  Input,
  InputLabel,
  StyledForm,
  ButtonWrapper,
  FormWrapper,
  StyledSelect,
  StyledErrorSpan,
} from './AddBookForm.styles';
import { addBook } from '../bookList/bookListSlice';
import Button from '../../atoms/button/Button';

const AddBookForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    data.bookImage.length
      ? (data.bookImage = data.bookImage[0].name)
      : (data.bookImage = 'default-img.png');
    data.bookId = uuidv4();
    dispatch(addBook(data));
    e.target.reset();
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <InputLabel htmlFor="bookTitle">Book Title</InputLabel>
          <Input
            name="bookTitle"
            type="text"
            placeholder="Book Title"
            ref={register({ required: true })}
          />
          {errors.bookTitle && <StyledErrorSpan>This field is required</StyledErrorSpan>}
        </InputWrapper>

        <InputWrapper>
          <InputLabel htmlFor="bookAuthor">Book Author</InputLabel>
          <Input
            name="bookAuthor"
            type="text"
            placeholder="Book Author"
            ref={register({ required: true })}
          />
          {errors.bookAuthor && <StyledErrorSpan>This field is required</StyledErrorSpan>}
        </InputWrapper>

        <InputWrapper>
          <InputLabel htmlFor="bookGenre">Book genre</InputLabel>
          <StyledSelect name="bookGenre" ref={register}>
            <option value="Other">Other</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Fiction">Fiction</option>
            <option value="Horror">Horror</option>
            <option value="Humor">Humor</option>
            <option value="Poetry">Poetry</option>
            <option value="Romance">Romance</option>
            <option value="Business">Business</option>
            <option value="Biographies">Biographies</option>
          </StyledSelect>
        </InputWrapper>

        <InputWrapper>
          <InputLabel htmlFor="bookImage">Choose a book picture</InputLabel>
          <Input name="bookImage" type="file" placeholder="Book Image" ref={register} />
        </InputWrapper>

        <InputWrapper>
          <InputLabel htmlFor="bookPrice">Book Price</InputLabel>
          <Input
            min="1"
            max="999"
            step="0.01"
            name="bookPrice"
            type="number"
            placeholder="Book Price"
            ref={register({ required: true })}
          />
          {errors.bookPrice && <StyledErrorSpan>This field is required</StyledErrorSpan>}
        </InputWrapper>

        <InputWrapper>
          <InputLabel htmlFor="bookStockAmount">Book Stock Amount</InputLabel>
          <Input
            min="0"
            name="bookStockAmount"
            type="number"
            placeholder="stock amount"
            ref={register({ required: true })}
          />
          {errors.bookPrice && <StyledErrorSpan>This field is required</StyledErrorSpan>}
        </InputWrapper>

        <ButtonWrapper>
          <Button styleType="send" type="submit">
            Add
          </Button>
        </ButtonWrapper>
      </StyledForm>
    </FormWrapper>
  );
};

export default AddBookForm;
