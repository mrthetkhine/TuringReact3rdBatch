import MovieList from "../features/movie/MovieList";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {
    apiDeleteMovie,
    apiGetAllMovie,
    apiSaveMovie,
    apiUpdateMovie,
    Movie,
    selectMovie
} from "../features/movie/movieSlice";
import {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import Swal from 'sweetalert2';

import {useDispatch} from "react-redux";

import {saveMovie, updateMovie} from "../features/movie/movieApi";
import MovieUI from "../features/movie/MovieUI";

const MovieSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    year: Yup.number().required('Required'),
});
const MovieForm = (props:any)=>{
    let dispatch = useAppDispatch();
    let movie = props.movie;
    console.log('Edit movie ',movie);
    let handleClose = props.handleClose;
    let initValues ={
        _id : movie? movie._id:'',
        title:  movie? movie.title:'',
        year:  movie? movie.year:'',
    }

    return (<div>

        <Formik
            initialValues={initValues}
            validationSchema={MovieSchema}
            onSubmit={values => {
                // same shape as initial values
                //console.log("Handle Close ", handleClose);
                console.log(values);

                if (!movie)//save
                {
                    let newMovie: Movie = {
                        title: values.title,
                        year: Number(values.year)
                    }

                    console.log('Movie ', newMovie);
                    dispatch(apiSaveMovie(newMovie));
                }
                else //Update movie
                {
                    let movieToUpdate: Movie = {
                        _id : values._id,
                        title: values.title,
                        year: Number(values.year)
                    }

                    console.log('Updated Movie ', movieToUpdate);
                    dispatch(apiUpdateMovie(movieToUpdate));
                }

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
                            className="btn btn-primary">{movie?'Update':'Save'}
                    </button>
                    <button type="button"
                            onClick={()=>handleClose()}
                            className="btn">Cancel
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

    const [editMovie,setEditMovie] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const btnAddNewMovieClick = ()=>{
        console.log('Btn Add New Movie click');
        setEditMovie(null);
        handleShow();
    };

    const btnEditClick=(movie:any)=>{
        console.log('Btn Edit Movie click ',movie);
        setEditMovie(movie);
        handleShow();
    }
    const btnDeleteClick = (movie:any)=>{
      console.log('Delete click ',movie);
        Swal.fire({
            title: 'Do you want to delete movie?',
            showCancelButton: true,
            confirmButtonText: 'Delete',

        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                dispatch(apiDeleteMovie(movie)).then(()=>{
                    Swal.fire('Deleted!', '', 'success');
                });

            }
        })
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
                    <Modal.Title>{editMovie?'Update Movie':'New Movie'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <MovieForm handleClose={handleClose}
                              movie ={editMovie}
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
            {
                movies.map((movie:Movie)=>
                    <MovieUI
                        key={movie._id}
                        editClick = {btnEditClick}
                        deleteClick = {btnDeleteClick}
                        movie={movie}/>
                )
            }
        </div>
    );
}