import s from './style.module.css';
// import PropTypes from 'prop-types';

const Container = ({title,children})=>{
return (
    <div className={s.container}>
        <h1 className={s.title}>{title} : </h1>
        <div className={s.children}>
        {children}    
        </div>

    </div>
)
}

export default Container;