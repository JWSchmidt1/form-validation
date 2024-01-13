import './App.scss';
import { useForm } from 'react-hook-form';
import { Container, Row, Col, FormGroup, FormText } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function App() {

  const onSubmit = (data) => console.log(data);

  const schema = yup.object().shape({

    firstName:yup
    .string()
    .required("Enter your name"),

    age:yup
    .number()
    .typeError("Enter your age")
    .min(0, "You have to be over 0")
    .max(22, "You have to be 22 or younger"),

    email:yup
    .string()
    .email('invalid e-mail format')
    .required("Enter your E-mail"),

    terms:yup
    .bool()
    .oneOf([true], 'Accept our terms')

  });

  const { register, handleSubmit, formState:{errors} } = useForm(

    {
      resolver:yupResolver(schema)
    }

  );

  return (
    <div id="myFormContainer" className="block-example border border-grey p-4">

      <form onSubmit={handleSubmit(onSubmit)}>

        <Row className="mb-3">
          <FormGroup>
            <Col>
              <label>FirstName</label>
            </Col>
            <Col>
              <input 
              type="text" 
              id="firstName" 
              className="form-control"
              {...register("firstName")}
               />
               <FormText color='muted'>
                {errors.firstName?.message}
               </FormText>
            </Col>
          </FormGroup>
        </Row>

        <Row className="mb-3">
          <FormGroup>
            <Col>
              <label>Age</label>
            </Col>
            <Col>
              <input 
              type="number" 
              id="age" 
              className="form-control"
              {...register("age")}
              />
              <FormText color="muted">
                {errors.age?.message}
              </FormText>
            </Col>
          </FormGroup>
        </Row>

        <Row className="mb-3">
          <FormGroup>
            <Col>
              <label>E-mail</label>
            </Col>
            <Col>
              <input 
              type="email" 
              id="email"
              className='form-control'
              {...register("email")}
              />
              <FormText color="muted">
                {errors.email?.message}
              </FormText>
            </Col>
          </FormGroup>
        </Row>

        <Row className='mb-3'>
          <div className="form-group form-check">
            <input 
            type="checkbox" 
            name="terms" 
            id="terms"
            {...register('terms')}
            className={`form-check-input ${errors.terms ? 'is-invalid' : ''}`}
            />
            <label htmlFor='terms'>Accept Terms & Conditions</label>
            <div className="invalid-feedback">{errors.terms?.message}</div>
          </div>
        </Row>

        <Row>
          <FormGroup>
            <Col>
              <button className="float-end btn btn-secondary">Submit</button>
            </Col>
          </FormGroup>
        </Row>
        

      </form>

    </div>
  );
}

export default App;
