export function MainHeading({ text }: { text: string }) {
    const mainHeadingStyle = {
        fontSize: 'var(--font-size-xl)',
        color: 'var(--secondary)',
        lineHeight: '1.5em',
        padding: 'var(--spacing-m) 0',
      };

    return (
        <h1 id={text.toLowerCase().replace(' ', '-')} style={mainHeadingStyle}>{text}</h1>
    );
}