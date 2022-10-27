
type Props = {
    args : string[]
}

export default function classNames({args }: Props) {
    return args.filter(Boolean).join(' ')
}