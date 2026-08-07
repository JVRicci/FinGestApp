export default function dateFormatter(date: Date): string {
    return  String(date.toLocaleDateString('pt-BR'))
}