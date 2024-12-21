export default function SecondaryHeading({ text }: { text: string }) {
    const secondaryHeadingStyle = {
        fontSize: 'var(--font-size-l)',
        color: 'var(--secondary)',
        lineHeight: '1.5em',
        padding: 'var(--spacing-m) 0',
        textAlign: 'left',
      };

    return (
        <h1 style={secondaryHeadingStyle}>{text}</h1>
    );
}