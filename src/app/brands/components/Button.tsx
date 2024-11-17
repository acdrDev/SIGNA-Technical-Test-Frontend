interface Props {
  text: string
  onClick: any
  color: 'green' | 'gray' | 'red'
}

export default function Button({text, onClick, color}: Props){
  return (
    <button
            onClick={() => onClick()}
            className={`text-${color}-900 w-44 mt-6 font-bold bg-${color}-300 hover:bg-${color}-400 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 focus:outline-none`}
          >
            {text}
          </button>
  )
}