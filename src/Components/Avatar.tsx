import styles from './Avatar.module.css';

//Desestruturação no js
//const user = { name: "Gabriel"}
//const {name} = user -----pega o name dentro do objeto user

export function Avatar({hasBorder = true , src}){
    //valor default do hasBorder é true
    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}
         src ={src} />
    );
}