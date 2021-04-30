export default function paragraph({weight,size,color,margin,customeClass, value}) {

return (
 <>
 <p className={customeClass} style={{fontWeight:weight,fontSize:size, color:color, margin:margin}}>{value}</p>
 </>
);
}
