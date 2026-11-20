// Adapted from Dillion Verma / Magic UI's Interactive Hover Button (MIT).
export default function InteractiveLink({
  children,
  className = "",
  ...props
}) {
  return (
    <a className={`interactive-link ${className}`} {...props}>
      <span className="interactive-link-dot" aria-hidden="true" />
      <span className="interactive-link-label">{children}</span>
      <span className="interactive-link-echo" aria-hidden="true">
        {children}
      </span>
    </a>
  );
}
