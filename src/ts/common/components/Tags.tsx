import "@scss/common/components/Tags.scss"

interface TagsProps {
    tagData: string[],
    parentIndex: number,
    className: string
}

const Tags = (props: TagsProps) => {
    const { className, tagData, parentIndex } = props

    return (
        <div className="tags my-3 d-flex flex-wrap">
            {tagData.map((elem, i) => {
                return (
                    <span
                        key={`tag-${parentIndex}-${i}`}
                        className={`${className}-tag`}
                        style={{ margin: "3px 10px 3px 0" }}
                    >
                        {elem}
                    </span>
                )
            })}
        </div>
    )
}
export default Tags