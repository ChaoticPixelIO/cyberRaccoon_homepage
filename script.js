// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? '\u2715' : '\u2630';
    });

    // Close menu on link click
    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.textContent = '\u2630';
      });
    });
  }

  // Copy button
  const copyBtn = document.querySelector('.copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const code = document.querySelector('.code-body pre');
      const text = code.textContent
        .split('\n')
        .filter(line => !line.trim().startsWith('#'))
        .map(line => line.trim())
        .filter(Boolean)
        .join('\n');

      navigator.clipboard.writeText(text).then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => { copyBtn.textContent = 'Copy'; }, 2000);
      });
    });
  }

  // Hero install one-liner copy
  const heroCopy = document.querySelector('.hero-install-copy');
  const heroCmd = document.querySelector('.hero-install-cmd');
  const heroLabel = document.querySelector('.hero-install-copy-label');
  if (heroCopy && heroCmd) {
    heroCopy.addEventListener('click', () => {
      const cmd = heroCmd.textContent.trim();
      navigator.clipboard.writeText(cmd).then(() => {
        if (heroLabel) heroLabel.textContent = 'Copied!';
        heroCopy.classList.add('copied');
        setTimeout(() => {
          if (heroLabel) heroLabel.textContent = 'Copy';
          heroCopy.classList.remove('copied');
        }, 2000);
      });
    });
  }
});
