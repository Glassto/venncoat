import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

const SplitText = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  tag = "p",
  allowHtml = false,
  parseNewlines = true,
  onLetterAnimationComplete,
}) => {
  const ref = useRef(null);
  const animationCompletedRef = useRef(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (document.fonts.status === "loaded") {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    }
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      const el = ref.current;

      if (el._rbsplitInstance) {
        try {
          el._rbsplitInstance.revert();
        } catch (_) {
          /* ignore */
        }
        el._rbsplitInstance = null;
      }

      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || "px" : "px";
      const sign =
        marginValue === 0
          ? ""
          : marginValue < 0
            ? `-=${Math.abs(marginValue)}${marginUnit}`
            : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;

      let targets;
      const assignTargets = (self) => {
        if (splitType.includes("chars") && self.chars.length)
          targets = self.chars;
        if (!targets && splitType.includes("words") && self.words.length)
          targets = self.words;
        if (!targets && splitType.includes("lines") && self.lines.length)
          targets = self.lines;
        if (!targets) targets = self.chars || self.words || self.lines;
      };

      const hasLineBreaks = /<br\s*\/??>/i.test(el.innerHTML);
      const needsLines =
        parseNewlines && hasLineBreaks && !splitType.includes("lines");
      const effectiveType = needsLines ? `${splitType} lines` : splitType;

      const splitInstance = new GSAPSplitText(el, {
        type: effectiveType,
        smartWrap: true,
        autoSplit: effectiveType.includes("lines"),
        linesClass: "split-line",
        wordsClass: "split-word",
        charsClass: "split-char",
        reduceWhiteSpace: false,
        onSplit: (self) => {
          assignTargets(self);
          return gsap.fromTo(
            targets,
            { ...from },
            {
              ...to,
              duration,
              ease,
              stagger: delay / 1000,
              scrollTrigger: {
                trigger: el,
                start,
                once: true,
                fastScrollEnd: true,
                anticipatePin: 0.4,
              },
              onComplete: () => {
                animationCompletedRef.current = true;
                onLetterAnimationComplete?.();
              },
              willChange: "transform, opacity",
              force3D: true,
            },
          );
        },
      });
      el._rbsplitInstance = splitInstance;

      return () => {
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === el) st.kill();
        });
        try {
          splitInstance.revert();
        } catch (_) {
          /* ignore */
        }
        el._rbsplitInstance = null;
      };
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded,
        allowHtml,
        parseNewlines,
        onLetterAnimationComplete,
      ],
      scope: ref,
    },
  );

  const renderTag = () => {
    const sanitizeHtml = (html) => {
      if (!html) return "";
      const escaped = html
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      // allow <br />
      const withBr = escaped.replace(/&lt;br\s*\/?&gt;/gi, "<br />");
      // allow <span class="..."> only; strip other attributes
      const withSpan = withBr.replace(
        /&lt;(\/?)(span)(\s+[^&>]*)?&gt;/gi,
        (_m, slash, _tag, attrs) => {
          if (slash) return "</span>";
          let classAttr = "";
          if (attrs) {
            const m = attrs.match(/\sclass\s*=\s*(["'])([^"']*)\1/i);
            if (m) classAttr = ` class="${m[2]}"`;
          }
          return `<span${classAttr}>`;
        },
      );
      return withSpan;
    };

    const processedText = parseNewlines
      ? String(text).replace(/\n/g, "<br />")
      : String(text);
    const sanitized = sanitizeHtml(processedText);
    const html = allowHtml
      ? sanitized
      : sanitized.replace(/<(?!br\s*\/??>)[^>]*>/gi, "");
    const style = {
      textAlign,
      wordWrap: "break-word",
      willChange: "transform, opacity",
    };
    const classes = `split-parent overflow-hidden inline-block whitespace-normal ${className}`;
    switch (tag) {
      case "h1":
        return (
          <h1
            ref={ref}
            style={style}
            className={classes}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      case "h2":
        return (
          <h2
            ref={ref}
            style={style}
            className={classes}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      case "h3":
        return (
          <h3
            ref={ref}
            style={style}
            className={classes}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      case "h4":
        return (
          <h4
            ref={ref}
            style={style}
            className={classes}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      case "h5":
        return (
          <h5
            ref={ref}
            style={style}
            className={classes}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      case "h6":
        return (
          <h6
            ref={ref}
            style={style}
            className={classes}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      default:
        return (
          <p
            ref={ref}
            style={style}
            className={classes}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
    }
  };
  return renderTag();
};

export default SplitText;
