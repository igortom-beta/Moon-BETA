export function SiteFooter({ t }) {
  return (
    <footer className="site-footer">
      <div className="shell footer-shell">
        <div>
          <div className="footer-brand">Moon River</div>
          <p>{t.footerTag}</p>
        </div>
        <p>{t.footerCopyright}</p>
      </div>
    </footer>
  );
}
