import { ImgHTMLAttributes } from 'react'; //interface
import styles from './Avatar.module.css';

//Desestruturação no js
//const user = { name: "Gabriel"}
//const {name} = user -----pega o name dentro do objeto user
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean; //?:opcional
    // src: string; //ja existem na extensão , estão no ...props
    // alt?: string;
}

export function Avatar({hasBorder = true, ...props }: AvatarProps){
    //valor default do hasBorder é true
    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        {...props} //pega o resto das propriedades
          />
    );
}
