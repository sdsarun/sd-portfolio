
export default function Tag({ text = "Any", TagStyle }) {
    return (
        <span className={TagStyle ? TagStyle : "px-2 py-1 bg-orange-100 text-orange-400 rounded-md border-orange-300 border"}>{text}</span>
    )
}