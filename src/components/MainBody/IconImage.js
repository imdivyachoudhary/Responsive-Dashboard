import styles from "./IconImage.module.css";


// This type of components are very useful for the purpose of reusability, as it is dynamic css and this component is used many times in the project
function IconImage({
  imageAlt,
  imageUrl,
  iconClass,
  iconFontSize,
  iconColor,
  height,
  width,
  bgcolor,
  borderRadius,
  onClickHandle,
}) {
  return (
    <div
      className={styles.IconImage}
      style={{
        height: `${height ? height : "50px"}`,
        width: `${width ? width : "50px"}`,
        borderRadius: `${borderRadius ? borderRadius : "10px"}`,
        backgroundColor: `${bgcolor ? bgcolor : "rgb(190, 155, 223)"}`,
      }}
      onClick={() => {
        if (onClickHandle) {
          onClickHandle();
        }
      }}
    >
      {imageUrl ?<img alt={imageAlt} src={imageUrl} /> : <i className={iconClass} style={{fontSize : `${iconFontSize? iconFontSize: "1.5rem"}`, color: `${iconColor? iconColor: "#7a0fe6"}`}}></i>}
    </div>
  );
}

export default IconImage;
