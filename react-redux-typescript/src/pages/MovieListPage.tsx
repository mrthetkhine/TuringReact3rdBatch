import MovieList from "../features/movie/MovieList";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {apiGetAllMovie, apiSaveMovie, Movie, selectMovie} from "../features/movie/movieSlice";
import {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {saveMovie} from "../features/movie/movieApi";

const MovieSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    year: Yup.number().required('Required'),
});
const MovieForm = (props:any)=>{
    let dispatch = useAppDispatch();
    let propMovie = props.movie;
    let handleClose = props.handleClose;
    let initValues ={
        _id : propMovie? propMovie._id:'',
        title:  propMovie? propMovie.title:'',
        year:  propMovie? propMovie.year:'',
    }

    return (<div>

        <Formik
            initialValues={initValues}
            validationSchema={MovieSchema}
            onSubmit={values => {
                // same shape as initial values
                //console.log("Handle Close ", handleClose);
                console.log(values);
                let movie: Movie = {
                    title: values.title,
                    year: Number(values.year)
                }

                console.log('Movie ',movie);
                dispatch(apiSaveMovie(movie));

                ///saveMovie(movie).then((data:any)=>console.log('Save movie backend result ',data));
                handleClose();
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
              }) => (
                <Form>
                    <label>Title</label>
                    <input type="text"
                           className="form-control"
                           id="title"
                           name="title"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.title}
                    />
                    {errors.title && touched.title ? (
                        <div className="alert alert-danger">{errors.title.toString()}</div>
                    ) : null}

                    <label>Year</label>
                    <input type="text"
                           className="form-control"
                           id="year"
                           name="year"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.year}
                    />
                    {errors.year && touched.year ? <div className="alert alert-danger">{errors.year.toString()}</div> : null}
                    <button type="submit"
                            className="btn btn-primary">Submit
                    </button>
                </Form>
            )}
        </Formik>

    </div>);
};
export default function MovieListPage() {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(apiGetAllMovie());
    },[]);

    const movies = useAppSelector(selectMovie);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const btnAddNewMovieClick = ()=>{
        console.log('Btn Add New Movie click');
        handleShow();
    };
    return (
        <div>
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={btnAddNewMovieClick}>
                Add New Movie
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{'New Movie'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <MovieForm handleClose={handleClose}
                             />

                </Modal.Body>
                {/*<Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>*/}
            </Modal>
            <MovieList movies={movies}/>
        </div>
    );
}